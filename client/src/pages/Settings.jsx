import SettingsForm from "../components/settings/SettingsForm/SettingsForm";

export default function Settings() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <SettingsForm />
    </div>
  );
}