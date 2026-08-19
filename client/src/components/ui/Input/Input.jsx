import styles from "./Input.module.css";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  error,
  required = false,
  disabled = false,
  name,
}) {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}

      <div
        className={`${styles.inputWrapper} ${
          error ? styles.errorBorder : ""
        }`}
      >
        {icon && <span className={styles.icon}>{icon}</span>}

        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}