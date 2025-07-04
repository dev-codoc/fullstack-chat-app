import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isLoading: false,
    isMessageLoading: false,

    getUsers: async () => {
        set({ isLoading: true });
        try {
            const response = await axiosInstance.get('/messages/users');
            set({ users: response.data, isLoading: false });
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessageLoading: true });
        try {
            const response = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: response.data, isMessageLoading: false });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isMessageLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    setSelectedUser: (user) => set({ selectedUser: user }),
}));