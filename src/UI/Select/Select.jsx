import './Select.css';

export default function Select({ options, defaultOption, value, onChange }) {
  return (
    <select className='app-select' value={value} onChange={(event) => onChange(event.target.value)}>
      <option value={defaultOption.value}>{defaultOption.title}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
