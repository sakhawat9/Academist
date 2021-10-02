import Sidebar from 'components/Dashboard/Sidebar';
import ManageCourses from 'components/ManageCourses/ManageCourses';
import Layout from 'components/utilities/Layout';
const managecourses = () => {
    return (
        <Layout>
           <div className="flex  items-stretch bg-gray-200">
               <div className="w-1/4"> 
               <Sidebar />
               </div>
            <div className="w-3/4 bg-white m-5 p-5 h-screen transition-all">
             <ManageCourses />
            </div>
            </div>
        </Layout>
    )
}

export default managecourses
