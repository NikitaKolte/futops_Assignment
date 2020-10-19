import { Table,Row,Col,Input,Select,Upload,Button } from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import './css/header.css'
import {VideoCameraOutlined,UploadOutlined,TagOutlined} from '@ant-design/icons'
import CamService from './services/CamService';
import {dataTableData} from './services/dataTable'
const {Search}=Input
const {Option}=Select

const columns = [
  {
    title: '',
    dataIndex: 'url',
  },
  {
    title: 'Device ID',
    dataIndex: 'deviceId',
  },
  {
    title: 'Last Activity',
    dataIndex: 'lastActivityTime',
  },
  {
    title: 'Tags',
    dataIndex:'tags'
  }
];

const tagDropdown=[]
dataTableData[0].Tags.map(tag=>{  
  tagDropdown.push(tag)
})
 
var today=new Date();
const data=[];
var diff;
var givenDate;

dataTableData.map((newData,index)=>{
  givenDate=new Date(newData.LastActivityTime);
 
  diff=((today-givenDate)/(24*3600*1000*7))
    // if(Math.round(diff)>4){
    //   diff=((currentMonth+12*currentYear)-(givenMonth+12*givenYear))
    // }
  return data.push({
      key: index,
      url: <img src={newData.SnapshotSignedUrl} alt="img" width="80" height="40"/>,
      deviceId: newData.DeviceID,
      lastActivityTime: Math.round(diff)<4? <>{Math.round(diff)} weeks ago</>:<>a month ago</>,
      tags:<span icon={TagOutlined}>{newData.Tags}</span>
    });    
  })
  
class RecordTable extends React.Component {
    constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
    this.state = {
      currentImage: 0,
      urls:["https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/06.png","https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/03.png",
      "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/01.png","https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/02.png",
      "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/04.png","https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/05.png"],
      users: [],
      };
    }

    changeImage() {
      if (this.state.currentImage < this.state.urls.length - 1) {
        this.setState({
          currentImage: this.state.currentImage + 1
        });
      } else {
        this.setState({
        currentImage: 0
        });
      }
      return this.currentImage;
    }

    componentDidMount() {
        CamService.getPictures().then((res) => {
            this.setState({ users: res.data});
        });
         setInterval(this.changeImage, 5000);
    }
    
    render() {
      const rowSelection = {};
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

            <Select placeholder="Tags" style={{ width: 120 }}>
              {tagDropdown.map((tag,index)=>{
                return(
                  <Option key={index} value={tag}>{tag}</Option>
                );
              })}   
            </Select>
          </Col> 
          <Col flex="1 0 50%" className="column" >
            <h4>Latest Snapshot</h4>
            <img src={this.state.urls[this.state.currentImage]} alt="cleaning images" width="400" height="250"/>  
          </Col>
        </Row><br/>

        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
        <br/>
     
        <Upload style={{float:"right"}}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
     );
  }
}
export default RecordTable 