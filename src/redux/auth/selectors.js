// Селектор для отримання користувача (ім'я та email)
export const selectUser = (state) => state.auth.user;

// Селектор для перевірки, чи користувач залогінений
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Селектор для перевірки, чи оновлюється сесія користувача
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

// Селектор для отримання токена
export const selectToken = (state) => state.auth.token;
