export async function getUserCourses () {
  const uuid = localStorage.getItem('csm-user-uuid')
  const user = await this._vm
    .$db()
    .collection('users')
    .where('uuid', '==', uuid)
    .get()
  const courses = user.docs[0].data().courses
  const coursesInformation = await Promise.all(
    courses.map(async course => {
      const data = await this._vm
        .$db()
        .collection('cursos')
        .doc(course)
        .get()
      return data.data()
    })
  )
  console.log(coursesInformation)
}
