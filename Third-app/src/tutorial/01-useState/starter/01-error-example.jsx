const ErrorExample = () => {
  let count=0;
  const handleChange=()=>{
      count=count+1;
      console.log(count)
  }
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleChange}>Click here</button>
    </>
  );
};

export default ErrorExample;
