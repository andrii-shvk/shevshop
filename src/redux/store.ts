import { rtkApi } from '@/api/rtkApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Включаем ваш API reducer в store
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

// Определяем типы для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;