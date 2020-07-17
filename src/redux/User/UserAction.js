import {
    SubmissionError
} from 'redux-form'
import {
    closeModal
} from '../Modal/ModelAction'



export const login = (creds) => {
    return async (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
            dispatch(closeModal())
        } catch (error) {
            console.log(error)
            throw new SubmissionError({
                _error: error.message
            })
        }
    }
}

export const register = user =>
    async (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            let newUser = firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            console.log(newUser);
            // update the displayName
            await newUser.user.updateProfile({
                displayName: user.displayName
            })
            let newUserDetails = {
                displayName: user.displayName,
                createdAt: firestore.FieldValue.serverTimestamp()
            }

            // save the data to the firestore
            await firestore.set(`users/${newUser.user.uid}`, {
                ...newUserDetails
            })
            dispatch(closeModal());

        } catch (error) {
            console.log(error)
            throw new SubmissionError({
                _error: error.message
            })
        }
    }

export const socialLogin = (selectedProvider) =>
    async (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            dispatch(closeModal());
            let user = await firebase.login({
                provider: selectedProvider,
                type: 'popup'
            })
            if (user.additionalUserInfo.isNewUser) {
                await firestore.set(`users/${user.user.uid}`, {
                    displayName: user.profile.displayName,
                    photoURL: user.profile.avatarUrl,
                    createdAt: firestore.FieldValue.serverTimestamp(),
                    email:user.profile.email,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }