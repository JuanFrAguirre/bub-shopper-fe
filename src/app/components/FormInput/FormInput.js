import clsx from 'clsx'

export const FormInput = ({
  name,
  type,
  value,
  options,
  className,
  onChange,
  onBlur,
  label,
  innerRef,
  placeholder,
  required,
}) => {
  const capitalize = (text) => {
    return text
      .split('')
      .map((char, i) => (i === 0 ? String(char).toUpperCase() : char))
      .join('')
  }

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <label htmlFor={name}>{capitalize(label)}</label>
      {!type || type === 'text' || type === 'number' ? (
        <input
          type={type || 'text'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="border border-gray-400 dark:bg-gray-800 rounded-md px-4 py-1 focus:outline-primary-600 active:outline-primary-600"
          ref={innerRef}
          placeholder={placeholder}
          max={1000}
          step={0.01}
          required={required}
        />
      ) : null}
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={innerRef}
          required={required}
        >
          <option value="">-- Select an option --</option>
          {options.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  )
}
