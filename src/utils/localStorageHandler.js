export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log('Error while setting item in localStorage', e);
  }
}

export const getItem = key => {
  try {
    const data = JSON.parse(localStorage.getItem(key))
    return data
  } catch (e) {
    console.log('Error while getting item from localStorage', e);
  }
}
