export const uploadImage = (file, fileName) =>
    async (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const path = `${user.uid}/user_images`;
        const options = {
            name: fileName
        }
        try {
            //upload the file to the storage //method is firebase instance
            let uploadedFile = await firebase.uploadFile(path, file, null, options)
            // we need to get the url back for the img
            let downloadURl = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
            //userdoc from firestore
            let userdoc = await firestore.get(`users/${user.uid}`)
            //check if user have photo, if not update profile
            if (!userdoc.data().photoURL) {
                await firebase.updateProfile({
                    photoURL: downloadURl
                })
                await user.updateProfile({
                    photoURL: downloadURl
                })
            }
            // add the image to firestore
            await firestore.add({
                collection: 'users',
                doc: user.uid,
                subcollections: [{
                    collection: 'photos'
                }, {
                    name: fileName,
                    url: downloadURl
                }]
            })
        } catch (error) {
            console.log(error);
        }
    }