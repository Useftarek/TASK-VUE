<template>
  <div class="dashboard">
    <div class="header">
      <h2>{{ user.name }}</h2>
    </div>

    <div class="info-container">
      <div class="info-box">
        <h3>Personal Information</h3>
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Website:</strong> {{ user.website }}</p>
      </div>

      <div class="info-box">
        <h3>Address</h3>
        <p><strong>Street:</strong> {{ user.address.street }}</p>
        <p><strong>Suite:</strong> {{ user.address.suite }}</p>
        <p><strong>City:</strong> {{ user.address.city }}</p>
        <p><strong>Zipcode:</strong> {{ user.address.zipcode }}</p>
      </div>

      <div class="info-box">
        <h3>Company</h3>
        <p><strong>Name:</strong> {{ user.company.name }}</p>
        <p><strong>Catch Phrase:</strong> {{ user.company.catchPhrase }}</p>
        <p><strong>BS:</strong> {{ user.company.bs }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  font-family: "Roboto", sans-serif;
  max-width: 900px;
  margin: auto;
  padding: 25px;
  border-radius: 10px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h2 {
  font-size: 2rem;
  color: #2600ff;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-box {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

h3 {
  color: green;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 8px;
  color: #6b6969;
}

strong {
  font-weight: 600;
  color: #333;
}
</style>
