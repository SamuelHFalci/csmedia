export async function fetchUserData () {
  const uuid = localStorage.getItem('csm-user-uuid')
  let user
  await this._vm
    .$db()
    .collection('users')
    .where('uuid', '==', uuid)
    .get()
    .then(function (querySnapshot) {
      user = querySnapshot.docs[0].data()
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error)
    })
  return { ...user }
}
