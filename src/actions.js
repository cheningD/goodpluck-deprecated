export const createUser = async params => {
  console.log("Sending data to backend... ", params)
  const response = await fetch(
    "https://goodpluck_cf_worker.pluck.workers.dev/createuser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  )
  const responseJson = await response.json()

  return responseJson
}

export const signIn = async params => {
  console.log("Sending data to backend... ", params)
  const response = await fetch(
    "https://goodpluck_cf_worker.pluck.workers.dev/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  )
  const responseJson = await response.json()

  return responseJson
}
