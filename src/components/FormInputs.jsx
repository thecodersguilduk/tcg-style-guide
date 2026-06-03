import React from 'react';

/**
 * FormInputs — Brand-consistent form elements.
 * All inputs use navy borders, sand focus ring, Poppins font.
 */

const labelClass = 'block text-sm font-semibold text-navy mb-1';
const inputBase =
  'w-full rounded-lg border border-navy/30 bg-white px-4 py-2.5 text-sm text-navy ' +
  'placeholder:text-navy/40 font-light ' +
  'focus:border-teal focus:ring-2 focus:ring-teal/30 focus:outline-none ' +
  'disabled:bg-sand-light disabled:opacity-60';

export function TextInput({ label, id, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className={labelClass}>{label}</label>}
      <input id={id} className={`${inputBase} ${error ? 'border-red' : ''}`} {...props} />
      {error && <p className="mt-1 text-xs text-red">{error}</p>}
    </div>
  );
}

export function TextArea({ label, id, rows = 4, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className={labelClass}>{label}</label>}
      <textarea
        id={id}
        rows={rows}
        className={`${inputBase} resize-y ${error ? 'border-red' : ''}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red">{error}</p>}
    </div>
  );
}

export function Select({ label, id, options = [], placeholder, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className={labelClass}>{label}</label>}
      <select id={id} className={`${inputBase} ${error ? 'border-red' : ''}`} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(({ value, label: text }) => (
          <option key={value} value={value}>{text}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red">{error}</p>}
    </div>
  );
}

export function Checkbox({ label, id, className = '', ...props }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 rounded border-navy/30 text-teal focus:ring-teal/30 accent-teal"
        {...props}
      />
      {label && <label htmlFor={id} className="text-sm font-normal text-navy">{label}</label>}
    </div>
  );
}
