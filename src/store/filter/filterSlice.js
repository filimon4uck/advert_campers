import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    vehicleType: '',
    vehicleEquipment: {
      AC: false,
      Automatic: false,
      Kitchen: false,
      TV: false,
      'Shower/WC': false,
    },
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    setVehicleEquipment(state, action) {
      const { name, checked } = action.payload;
      state.vehicleEquipment[name] = checked;
    },
    resetFilter(state, _) {
      state = {
        location: '',
        vehicleType: '',
        vehicleEquipment: {
          AC: false,
          Automatic: false,
          Kitchen: false,
          TV: false,
          'Shower/WC': false,
        },
      };
    },
  },
});

export const { setLocation, setVehicleType, setVehicleEquipment, resetFilter } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
