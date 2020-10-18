import { Table,Row,Col,Input,Select } from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import './css/header.css'
import {VideoCameraOutlined,TagOutlined} from '@ant-design/icons'
import CamService from './services/CamService';
import Mouse from './css/mickey.jpg'
const {Search}=Input
const {Option}=Select

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class RecordTable extends React.Component {
    constructor(props) {
		super(props);
		this.state = {users: []};
    }
//   state = {
//     selectedRowKeys: [], // Check here to configure the default column
//   };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  componentDidMount() {

        CamService.getPictures().then((res) => {
            this.setState({ users: res.data});
        });
    }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return(<div>
           <Row className="row">
      <Col flex="1 0 50%" className="column" >
      <h4><VideoCameraOutlined />&nbsp;&nbsp;&nbsp;&nbsp;Camera View </h4><br/>

      <h5 style={{alignSelf:'start'}}>Search</h5>
            <Search
      
      placeholder="search by device Id"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />

    
        <Select placeholder="Tags" style={{ width: 90 }}
       >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    
    
    </Col> 
      <Col flex="1 0 50%" className="column" >
          <h4>Latest Snapshot</h4>
      <img src={Mouse} name="Joh" alt="Flowers in Chania" width="400" height="250"/>
      </Col>
         </Row>

     <Table rowSelection={rowSelection} columns={columns} dataSource={data} /></div>);
  }
}

export default RecordTable 