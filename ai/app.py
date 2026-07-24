import streamlit as st
from chatbot import get_ai_response
import json
import numpy as np
from PIL import Image
from data import PLATFORM_DB, DEFAULT_USER, featuredAuctions, fraudAnalysis

TF_AVAILABLE = False
try:
    import tensorflow as tf
    from tensorflow.keras.applications import MobileNetV2
    TF_AVAILABLE = True
except ImportError:
    pass


st.set_page_config(page_title="AuctioHub", page_icon="🔨", layout="centered")

 
@st.cache_resource
def load_vision_model():
    return tf.keras.applications.MobileNetV2(weights='imagenet')

 
with st.sidebar:
    st.title("⚙️ AuctioHub Tools")
    st.caption("Logged in as: **Active User**")
    st.divider()
    
    st.markdown("### 🖼️ Image Recognition")
    uploaded_file = st.file_uploader("Upload an item photo...", type=["jpg", "png", "jpeg"])
    
    if uploaded_file is not None:
        image = Image.open(uploaded_file).resize((224, 224))
        st.image(image, use_column_width=True)
        
        if TF_AVAILABLE:
            if st.button("Identify Object"):
                with st.spinner("Analyzing image..."):
                    model = load_vision_model()
                    img_array = tf.keras.preprocessing.image.img_to_array(image)
                    img_array = np.expand_dims(img_array, axis=0)
                    img_array = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)    
                    preds = model.predict(img_array)
                    decoded = tf.keras.applications.mobilenet_v2.decode_predictions(preds, top=1)[0]
                    label = decoded[0][1].replace('_', ' ').title()
                    confidence = decoded[0][2] * 100
                    
                    st.success(f"Detected: **{label}** ({confidence:.1f}%)")
        else:
            st.info("💡 **Vision Engine:** Running in Cloud Mode.")

 
if "messages" not in st.session_state:
    st.session_state.messages = [{"role": "assistant", "content": "👋 Welcome to AuctioHub! Are you looking to place a bid on an item or list something new to sell today?"}]

st.title("🔨 AuctioHub")

# Display Chat History
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Chat Input & Dynamic Intent Processing
if user_query := st.chat_input("Ask about bidding, selling, or platform items..."):
    st.session_state.messages.append({"role": "user", "content": user_query})
    with st.chat_message("user"):
        st.markdown(user_query)

    try:
        api_key = st.secrets["GROQ_API_KEY"]
        
        
    except Exception as e:
        st.error(f"API/System Error: {e}")