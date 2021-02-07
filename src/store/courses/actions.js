export async function getUserCourses () {
  const uuid = localStorage.getItem('csm-user-uuid')
  const allCourses = []
  const userCourses = []
  await this._vm
    .$db()
    .collection('users')
    .where('uuid', '==', uuid)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const courses = doc.data().courses
        courses.map(course => {
          userCourses.push(course)
        })
      })
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error)
    })
  await this._vm
    .$db()
    .collection('cursos')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        allCourses.push(doc.data())
      })
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error)
    })
  return {
    userCourses,
    allCourses
  }
}

export async function getCourseBySlug ({ commit }, slug) {
  let course
  await this._vm
    .$db()
    .collection('cursos')
    .where('slug', '==', slug)
    .get()
    .then(querySnapshot => {
      course = querySnapshot.docs[0].data()
    })
  return course
}
