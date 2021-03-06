import React from 'react';
import PropTypes from 'prop-types';
import { Table, Modal } from 'antd';
import styles from './List.less';
import classnames from 'classnames';
import AnimTableBody from '../../components/DataTable/AnimTableBody';
import { DropOption } from '../../components';
import { Link } from 'dva/router';

const confirm = Modal.confirm;

const List = ({ onDeleteItem, onEditItem, isMotion, aItem, ...tableProps }) => {
  const handleMenuClick = (record, e) => {
    if (e.key === 'update') {
      onEditItem(record);
    } else if (e.key === 'delete') {
      confirm({
        title: '是否删除?',
        onOk () {
          onDeleteItem(record.id);
        },
      })
    }
  }

  let columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
      
    },
    {
      title: '昵称',
      dataIndex: 'roleName',
      key: 'roleName',
      render: (text, record) => <Link to={`users/${text}`}>{text}</Link>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '修改时间',
      dataIndex: 'addtime',
      key: 'addtime',
      render (time, record) {
        return new Date(parseInt(time) * 1000).toLocaleString();
      }
    },
     {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: 'update', name: '修改' }, { key: 'delete', name: '删除' }]} />
      },
    },
  ];

  /*for (let key in aItem) {
      columns.push({
        title: key,
        dataIndex: key,
        key: key,
      });
  }

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }
*/
  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        // scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={(record) => {
          return record.id;
        }}
        // getBodyWrapper={getBodyWrapper}
      />
    </div>
  );
};

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
};

export default List;
