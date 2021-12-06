import PropTypes from 'prop-types';

export default function ComponentPropTypes(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  );
}

ComponentPropTypes.propTypes ={

    name:PropTypes.string,
    age:PropTypes.number

}
