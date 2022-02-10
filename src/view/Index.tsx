import React, { useState, useEffect } from 'react'
import Api from '../api'
import { Table, Tag, Space } from 'antd'
function Index() {
  const data = useState([
    {
      userName: '李廷',
      mobilePhone: '18234130049',
      headFaceUrl:
        'https://axzo-app.oss-cn-chengdu.aliyuncs.com/dev/face/20210420111628_4465.jpg',
      availableCallCountBalance: 2002,
      usedCallDurationBalance: 3,
      publishRecruitWorkerTotalCount: 0,
      usedCallTimes: 2,
      workerLeaderInfoInputFlag: false,
      workerInfoInputFlag: true,
      registerTime: '2021.06.28 17:00:54',
      workerInfoDisplayFlag: true,
    },
    {
      userName: '邹维',
      mobilePhone: '15173837725',
      headFaceUrl: '',
      availableCallCountBalance: 2006,
      usedCallDurationBalance: 0,
      publishRecruitWorkerTotalCount: 0,
      usedCallTimes: 2,
      workerLeaderInfoInputFlag: false,
      workerInfoInputFlag: false,
      registerTime: '2021.06.28 17:00:21',
      workerInfoDisplayFlag: true,
    },
    {
      userName: '测试1号',
      mobilePhone: '15173869928',
      headFaceUrl: '',
      availableCallCountBalance: 0,
      usedCallDurationBalance: 0,
      publishRecruitWorkerTotalCount: 0,
      usedCallTimes: 0,
      workerLeaderInfoInputFlag: false,
      workerInfoInputFlag: false,
      registerTime: '2021.06.29 10:37:20',
      workerInfoDisplayFlag: true,
    },
    {
      userName: '测试2号',
      mobilePhone: '15173869927',
      headFaceUrl: '',
      availableCallCountBalance: 0,
      usedCallDurationBalance: 0,
      publishRecruitWorkerTotalCount: 0,
      usedCallTimes: 0,
      workerLeaderInfoInputFlag: false,
      workerInfoInputFlag: false,
      registerTime: '2021.06.29 10:44:39',
      workerInfoDisplayFlag: true,
    },
    {
      userName: '测试3号',
      mobilePhone: '15173869926',
      headFaceUrl: '',
      availableCallCountBalance: 0,
      usedCallDurationBalance: 0,
      publishRecruitWorkerTotalCount: 0,
      usedCallTimes: 0,
      workerLeaderInfoInputFlag: false,
      workerInfoInputFlag: false,
      registerTime: '2021.06.29 13:37:42',
      workerInfoDisplayFlag: true,
    },
    {
      userName: '测试4号',
      mobilePhone: '15173869925',
      headFaceUrl: '',
      availableCallCountBalance: 1003,
      usedCallDurationBalance: 0,
      publishRecruitWorkerTotalCount: 0,
      usedCallTimes: 0,
      workerLeaderInfoInputFlag: false,
      workerInfoInputFlag: false,
      registerTime: '2021.06.29 13:38:26',
      workerInfoDisplayFlag: true,
    },
  ])

  const columns = useState([
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ])
  useEffect(() => {
    handleLogin()
  })
  const handleLogin = async () => {
    let params = {
      pageSize: 20,
      pageNo: 1,
    }
    const res = await Api.user.getCardList(params)
    console.log(res, 'res-=-=-=')
  }
  return (
    <>
      <Table dataSource={data} />
    </>
  )
}

export default Index
