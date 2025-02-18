import { create } from 'zustand';

const UserDetails = create((set) => ({

    user: null,
    id:null,
    role:null,
    login: (userData) => set({ 
      user: userData.user,
      id: userData.id,
      role: userData.role 
    }),

    logout: () => set({ user: null,id:null,role:null }),
}))

export default UserDetails;
