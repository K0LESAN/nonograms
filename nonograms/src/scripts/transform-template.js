export default function (initialTemplate, arr) {
  let start = 0;

  for (let i = 0; i < 5; i++) {
    const line = [];
    const end = start + 5;

    for (let j = 0; j < arr.length; j++) {
      const localArr = arr[j].children;

      for (start; start < end; start++) {
        console.log(i, start, end);
        line.push(localArr[start].getAttribute('data-status') || 0);
      }
    }

    initialTemplate.push(line);
  }

  return initialTemplate;
}
