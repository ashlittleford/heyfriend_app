import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { Edit, UserPlus, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const { members } = useData();
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
     return <Layout>Access Denied</Layout>;
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-brand-black">Candidate Management</h1>
        <Button onClick={() => navigate('/admin/new')} className="flex items-center">
            <UserPlus size={18} className="mr-2" />
            Add New Candidate
        </Button>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
                    <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Formation Days</th>
                        <th className="px-6 py-4">Walking on Country</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {members.map(member => (
                        <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{member.fullName}</td>
                            <td className="px-6 py-4 text-gray-500">{member.email}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${member.formationDaysCompleted > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {member.formationDaysCompleted} Completed
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${member.walkingOnCountry === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {member.walkingOnCountry}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right space-x-2">
                                <button
                                    onClick={() => navigate(`/admin/edit/${member.id}`)}
                                    className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
                                    title="Edit"
                                >
                                    <Edit size={18} />
                                </button>
                                {/* Delete placeholder - normally would confirm then delete */}
                                <button
                                    className="text-gray-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
                                    title="Delete (Disabled in Demo)"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    {members.length === 0 && (
                        <tr>
                            <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                No candidates found. Click "Add New Candidate" to create one.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </Card>
    </Layout>
  );
};

export default AdminDashboard;
