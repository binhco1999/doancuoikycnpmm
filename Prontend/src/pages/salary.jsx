import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Salary = () => {
  const data = {
    columns: [
      {
        label: 'FullName',
        field: 'fullname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Department',
        field: 'department',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Basic salary',
        field: 'basicsalary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Working Day',
        field: 'workingday',
        sort: 'asc',
        width: 100
      },

      {
        label: 'Bonus',
        field: 'bonus',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Minus',
        field: 'minus',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Tax',
        field: 'tax',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Offical Salary',
        field: 'officalsalary',
        sort: 'asc',
        width: 100
      }
      

    ],
    rows: [
      {
        fullname: 'Tran Binh Co',
        position: 'Quan Ly',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$800',
        workingday:'30',
        bonus:'$50',
        minus:'$0',
        tax:'$30',
        officalsalary:'$820'
      },
      {
        fullname: 'Nguyen Thai Phuong Thao',
        position: 'Nhan vien ke toan',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$550',
        workingday:'30',
        bonus:'$30',
        minus:'$0',
        tax:'$24',
        officalsalary:'$556'
      },
      {
        fullname: 'Vo Nguyen Minh Hien',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Lam Gia Khanh',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Ton Nu Nhu Quynh',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Tran Duy Khanh',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Bui Chi Cong',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Cao Minh Tai',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Tran Nhat Duy',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Le Van Tai',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Bui Chi Canh',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      },
      {
        fullname: 'Truong Van Dan',
        position: 'Nhan vien',
        department: 'HCM',
        age: '21',
        date: '2020/12',
        basicsalary: '$600',
        workingday:'30',
        bonus:'$40',
        minus:'$0',
        tax:'$28',
        officalsalary:'$612'
      
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      small
      data={data}
    />
  );
}

export default Salary;