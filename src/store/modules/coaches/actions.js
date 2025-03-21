export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-b73b6-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coachData),
      }
    );

    //const responseData = await response.json()

    if (!response.ok) {
      // error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
