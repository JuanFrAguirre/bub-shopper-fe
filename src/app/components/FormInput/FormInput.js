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
          className="border border-gray-400 rounded-md px-4 py-1"
          ref={innerRef}
          placeholder={placeholder}
        />
      ) : null}
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={innerRef}
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
