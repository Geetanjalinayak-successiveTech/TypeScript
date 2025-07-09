'use client'

import Button from "./reusable_Button";

export default function ButtonGroup() {
  const handleClick = (msg:string) => () => alert(msg);

  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <Button variant="primary" onClick={handleClick('Primary clicked')}>
        Primary
      </Button>
      <Button variant="secondary" onClick={handleClick('Secondary clicked')}>
        Secondary
      </Button>
      <Button variant="danger" onClick={handleClick('Danger clicked')}>
        Danger
      </Button>
    </div>
  );
}