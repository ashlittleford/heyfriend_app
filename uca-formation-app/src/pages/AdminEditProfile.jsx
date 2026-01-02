import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowLeft, Plus, Trash } from 'lucide-react';

const AdminEditProfile = () => {
  const { user } = useAuth();
  const { getMember, updateMember, addMember } = useData();
  const navigate = useNavigate();
  const { id } = useParams();
  const isNew = !id;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    formationPanelMembers: [], // {name, role}
    formationDaysCompleted: 0,
    walkingOnCountry: 'No',
    upcomingDates: [], // {date, description}
    panelDates: { term1: '', term2: '', term3: '' }
  });

  useEffect(() => {
    if (!isNew && id) {
      const member = getMember(Number(id));
      if (member) {
        setFormData(member);
      } else {
        navigate('/admin');
      }
    }
  }, [id, isNew, getMember, navigate]);

  if (!user || user.role !== 'admin') {
     return <Layout>Access Denied</Layout>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setFormData(prev => ({
            ...prev,
            [parent]: { ...prev[parent], [child]: value }
        }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePanelMemberChange = (index, field, value) => {
      const newPanel = [...formData.formationPanelMembers];
      newPanel[index] = { ...newPanel[index], [field]: value };
      setFormData(prev => ({ ...prev, formationPanelMembers: newPanel }));
  };

  const addPanelMember = () => {
      setFormData(prev => ({
          ...prev,
          formationPanelMembers: [...prev.formationPanelMembers, { name: '', role: '' }]
      }));
  };

  const removePanelMember = (index) => {
       setFormData(prev => ({
          ...prev,
          formationPanelMembers: prev.formationPanelMembers.filter((_, i) => i !== index)
      }));
  };

  const handleUpcomingDateChange = (index, field, value) => {
      const newDates = [...formData.upcomingDates];
      newDates[index] = { ...newDates[index], [field]: value };
      setFormData(prev => ({ ...prev, upcomingDates: newDates }));
  };

  const addUpcomingDate = () => {
      setFormData(prev => ({
          ...prev,
          upcomingDates: [...prev.upcomingDates, { date: '', description: '' }]
      }));
  };

   const removeUpcomingDate = (index) => {
       setFormData(prev => ({
          ...prev,
          upcomingDates: prev.upcomingDates.filter((_, i) => i !== index)
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation could go here
    if (isNew) {
        addMember(formData);
    } else {
        updateMember(Number(id), formData);
    }
    navigate('/admin');
  };

  return (
    <Layout>
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6 space-x-4">
                <button onClick={() => navigate('/admin')} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-brand-black">{isNew ? 'New Candidate' : 'Edit Candidate'}</h1>
            </div>

            <Card>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Formation Days Completed</label>
                            <input
                                type="number"
                                name="formationDaysCompleted"
                                value={formData.formationDaysCompleted}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Walking on Country</label>
                            <select
                                name="walkingOnCountry"
                                value={formData.walkingOnCountry}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Panel Dates */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Formation Panel Dates (Yearly)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Term 1</label>
                                <input
                                    type="text"
                                    name="panelDates.term1"
                                    value={formData.panelDates?.term1 || ''}
                                    onChange={handleChange}
                                    placeholder="e.g. March 10-12"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Term 2</label>
                                <input
                                    type="text"
                                    name="panelDates.term2"
                                    value={formData.panelDates?.term2 || ''}
                                    onChange={handleChange}
                                    placeholder="e.g. July 15-17"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Term 3</label>
                                <input
                                    type="text"
                                    name="panelDates.term3"
                                    value={formData.panelDates?.term3 || ''}
                                    onChange={handleChange}
                                    placeholder="e.g. Nov 5-7"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-red focus:border-brand-red"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                     {/* Panel Members */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-800">Formation Panel Members</h3>
                            <button type="button" onClick={addPanelMember} className="text-sm text-brand-red font-medium flex items-center hover:underline">
                                <Plus size={16} className="mr-1" /> Add Member
                            </button>
                        </div>
                        <div className="space-y-3">
                            {formData.formationPanelMembers.map((member, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            value={member.name}
                                            onChange={(e) => handlePanelMemberChange(index, 'name', e.target.value)}
                                            placeholder="Name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                        />
                                    </div>
                                    <div className="flex-1">
                                         <input
                                            type="text"
                                            value={member.role}
                                            onChange={(e) => handlePanelMemberChange(index, 'role', e.target.value)}
                                            placeholder="Role (e.g. Chair)"
                                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                        />
                                    </div>
                                    <button type="button" onClick={() => removePanelMember(index)} className="text-gray-400 hover:text-red-500 pt-2">
                                        <Trash size={16} />
                                    </button>
                                </div>
                            ))}
                            {formData.formationPanelMembers.length === 0 && <p className="text-gray-500 text-sm italic">No panel members added.</p>}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Upcoming Dates */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-800">Upcoming Schedule</h3>
                             <button type="button" onClick={addUpcomingDate} className="text-sm text-brand-red font-medium flex items-center hover:underline">
                                <Plus size={16} className="mr-1" /> Add Date
                            </button>
                        </div>
                         <div className="space-y-3">
                            {formData.upcomingDates.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-1/3">
                                        <input
                                            type="date"
                                            value={item.date}
                                            onChange={(e) => handleUpcomingDateChange(index, 'date', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                        />
                                    </div>
                                    <div className="flex-1">
                                         <input
                                            type="text"
                                            value={item.description}
                                            onChange={(e) => handleUpcomingDateChange(index, 'description', e.target.value)}
                                            placeholder="Description (e.g. Retreat)"
                                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                        />
                                    </div>
                                    <button type="button" onClick={() => removeUpcomingDate(index)} className="text-gray-400 hover:text-red-500 pt-2">
                                        <Trash size={16} />
                                    </button>
                                </div>
                            ))}
                             {formData.upcomingDates.length === 0 && <p className="text-gray-500 text-sm italic">No upcoming dates.</p>}
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end space-x-4">
                        <Button variant="secondary" onClick={() => navigate('/admin')}>Cancel</Button>
                        <Button type="submit">Save Candidate</Button>
                    </div>
                </form>
            </Card>
        </div>
    </Layout>
  );
};

export default AdminEditProfile;
