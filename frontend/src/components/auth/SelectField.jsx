const SelectField = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="mb-5">

      <label className="block mb-2 font-semibold">

        {label}

      </label>

      <select
        value={value}
        onChange={onChange}
        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
      >

        <option value="">

          Select {label}

        </option>

        {options.map((item) => (

          <option
            key={item}
            value={item}
          >

            {item}

          </option>

        ))}

      </select>

    </div>
  );
};

export default SelectField;