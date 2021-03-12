let dict = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it done",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for ‘error’",
  pm:
    "The short version  of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};

while (true) {
    let input = prompt('Enter a keyword:');
    if (dict[input]) {
        alert(`${input}\n${dict[input]}`);
    } else {
        const definitionInput = prompt(`We cannot find your keyword: ${input}. Leave your definition: `);
        dict[input] = definitionInput;
    }
}