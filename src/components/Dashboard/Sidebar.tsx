import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineUserAdd } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';
import { BsBook, BsFillInboxesFill } from 'react-icons/bs';
import { FaDiscourse } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { GoReport } from 'react-icons/go';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
const Sidebar = () => {
  const router = useRouter();
 
    return (
        <>
        <React.Fragment>
 
       <nav className="bg-white m-5 origin-bottom-left">
           <Navigation
            // you can use your own router's api to get pathname
            activeItemId={router.pathname}
            onSelect={({itemId}) => {
              router.push({pathname:itemId})
              // maybe push to the route
            }}

            
            
            items={[
              {
                title: 'Dashboard',
                itemId: '',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <BsFillInboxesFill name="inbox" />,
              },
              {
                title: 'Users',
                itemId: '',
                elemBefore: () => <AiOutlineUserAdd name="users" />,
                subNav: [
                  {
                    title: 'Admin',
                    itemId: '/',
                  
                    // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                    elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                  },
                  {
                    title: 'Teacher',
                    itemId: '/',
                    elemBefore: () => <GiTeacher name="teacher" />,
                  },
                  {
                    title: 'Student',
                    itemId: '/',
                    elemBefore: () => <BsBook name="book" />,
                  },
                ],
              },
          
            ]}
          />
            <Navigation
            // you can use your own router's api to get pathname
            activeItemId={router.pathname}
            onSelect={({itemId}) => {
              router.push({pathname:itemId})
              // maybe push to the route
            }}

            
            
            items={[
         
              {
                title: 'Courses',
                itemId: '',
                elemBefore: () => <FaDiscourse name="courses" />,
                subNav: [
                  {
                    title: 'Manage courses',
                    itemId: '/dashboard/courses/managecourses',
                    elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                  },
                  {
                    title: 'Add New Course',
                    itemId: '/dashboard/courses/addNewCourse',
                    elemBefore: () => <BiImageAdd name="teacher" />,
                  },
                  {
                    title: 'Course Catagory',
                    itemId: '/dashboard/courses/courseCategory',
                    elemBefore: () => <BsBook name="book" />,
                  },
                  {
                    title: 'Coupons',
                    itemId: '',
                    elemBefore: () => <BsBook name="book" />,
                  },
                ],
              },
              {
                title:'Report',
                itemId:'',
                elemBefore: () => <GoReport name="inbox" />,
                subNav:[
                  {
                    title:'Admin Revenue',
                    itemId:'/dashboard/report/admin-revenue'
                  },
                  {
                    title:'Instructor Revenue',
                    itemId:'/dashboard/report/instructor-revenue'
                  }
                ]
              }
              
            ]}
          />


<Navigation
            // you can use your own router's api to get pathname
            activeItemId={router.pathname}
            onSelect={({itemId}) => {
              router.push({pathname:itemId})
              // maybe push to the route
            }}

            
            
            items={[
         
              {
                title: 'Admins',
                itemId: '',
                elemBefore: () => <FaDiscourse name="courses" />,
                subNav: [
                  {
                    title: 'Admin Manage',
                    itemId: '/dashboard/admin/manageadmin',
                    elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                  },
                  {
                    title: 'Add Admin',
                    itemId: '/dashboard/admin/addadmin',
                    elemBefore: () => <BiImageAdd name="teacher" />,
                  }
                ],
              },
          
            ]}
          />


           </nav>
      
    </React.Fragment>
         


        </>
    );
};

export default Sidebar;