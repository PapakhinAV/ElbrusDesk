// import './index.css'

import { useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';






const options = [
  { value: 'racooons', label: 'Еноты' },
  { value: 'wolfs', label: 'Волки' },
  { value: 'foxs', label: 'Лисы' },
  { value: 'eagles', label: 'Орлы' },
  { value: 'bees', label: 'Пчелы' },
  { value: 'hadgehog', label: 'Ежи' },
  { value: 'beaver', label: 'Бобры' },
  { value: 'owls', label: 'Совы' },
  { value: 'bears', label: 'Медведи' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
]
const animatedComponents = makeAnimated();


const colourStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    border: 'none',
    boxShadow: 'none',
  }),
  

};

export default function AnimatedMulti() {

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      styles={colourStyles}
      placeholder={'Выбрать...'}
    />
  );
}

