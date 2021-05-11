import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function NoteComponent() {
  return (
    <Collapse bordered={false} style={{ marginBottom: 20 }}>
      <Panel header={<strong>Read this:</strong>} key="1">
        <p>
          I am using <strong>mockapi.io</strong> but this site has some
          drawbacks:
        </p>
        <ol>
          <li>
            First, I cannot use <strong>mockapi.io</strong> supported pagination
            API because it does not return the total number for the pagination.
            That is why I get all data in one request and do a frontend
            pagination.
          </li>
          <li>
            Second, <strong>Mockapi.io</strong> built-in sorting query also does
            not work well. I have tried sorting data by <strong>id</strong> and{' '}
            <strong>creatAt</strong> but they both sorted data incorrectly.
          </li>
        </ol>
        <p>
          Because of the issues above, I get all data and use pagination of Ant
          Design table. If you want to test me about how to make functional
          pagination with limit and offset, you can send me another tests with
          working APIs
        </p>
      </Panel>
    </Collapse>
  );
}

export default NoteComponent;
