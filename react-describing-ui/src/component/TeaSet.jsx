function Cup({ number }) {
    return <h2>Tea cup for guest #{number}</h2>;
  }
  
  export default function TeaSet() {
    return (
      <>
        <Cup number={1} />
        <Cup number={2} />
        <Cup number={3} />
      </>
    );
  }
  