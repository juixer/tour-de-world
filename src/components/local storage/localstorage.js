const getLocalStorage =() =>{
    const lsData = localStorage.getItem('visited');
    if(lsData){
        return JSON.parse(lsData);
    }
    return [];
}

const saveToLocalStorage = data =>{
    const dataStringified = JSON.stringify(data);
    localStorage.setItem('visited', dataStringified);
}

const addToLocalStorage = id => {
    const data = getLocalStorage();
    let newData;
    for (const element of data) {
       newData =  element;
    }
    if(newData !== id){
        data.push(id);
        saveToLocalStorage(data);
    }
}
const removeLocalStorage = id => {
    const data = getLocalStorage();
    const remaining = data.filter(idx => idx !== id);
    saveToLocalStorage(remaining);
}

export {addToLocalStorage, getLocalStorage, removeLocalStorage}