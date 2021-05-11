import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function NoteComponent() {
  return (
    <Collapse
      bordered={false}
      style={{ marginBottom: 20 }}
      defaultActiveKey={['1']}
    >
      <Panel header={<strong>Read this:</strong>} key="1">
        <p>
          I am using <strong>mockapi.io</strong> but this site has some big
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
            <strong>createAt</strong> but they both sorted data incorrectly.
          </li>
          <li>
            Finally, GET and POST API from <strong>Mockapi.io</strong> always
            return success code 200 and 201 so I do not make any function for
            errors handling.
          </li>
        </ol>
        <p>
          Because of those issues above, I chose this approach: get all data
          from API, sort data in Frontend and use pagination of Ant Design
          table.
        </p>
      </Panel>
    </Collapse>
  );
}

export default NoteComponent;
