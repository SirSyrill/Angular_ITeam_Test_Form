export function getTechnologies(){
    return new Array('Angular', 'React', 'Vue')
}

export async function postData(data: any) {
  const response = await fetch('/someLink', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}