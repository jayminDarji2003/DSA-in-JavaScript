/*
    Question : LocalStorage with expiry

    set "bar" on "foo" that will expiry after 1000 milliseconds myLocalStorage.setItem("foo", "bar", 1000);

    after 2 seconds
    console.log(myLocalStorage.getItem("foo")
    null
*/


const myLocalStorage = () => {
    return {
        setItem: function (key, value, expiry) {
            localStorage.setItem(key, value);

            setTimeout(() => {
                localStorage.removeItem(key);
            }, expiry);
        },
        getItem: function (key) {
            console.log(localStorage.getItem(key));
        }
    }
}

const storage = myLocalStorage();

storage.setItem("foo", "bar", 3000)
storage.getItem("foo")
