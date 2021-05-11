import React, { useState } from 'react';
import { Button } from 'antd';

function CounterPage() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="fadeIn">
      <h1>Count</h1>
      <h2>Total Counts: {count}</h2>
      <Button
        type="primary"
        style={{ marginRight: 10 }}
        onClick={() => setCount(count + 1)}
      >
        Add count
      </Button>
      <Button onClick={() => setCount(0)}>Reset Count</Button>
    </div>
  );
}

export default CounterPage;
