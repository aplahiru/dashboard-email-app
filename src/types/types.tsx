
export type mailsPrototype = {
    sender: string,
    profile: string,
    time: string,
    header: string,
    body: string,
    attachments: string[],
    footer: string,
    id: number,
    readStatus: "read" | "unread",
    name: string
  }

export const mails:mailsPrototype[] = [
    {
        id: 1001,
        readStatus: "unread",
        name: "Cayon Talor",
      sender: "cayontalor@gmail.com",
      profile: "https://randomuser.me/api/portraits/women/86.jpg",
      time: "08.30 AM",
      header: "Password Reset notification",
      body: "Dear Taylor,\n\nIpsum ullamco voluptate ullamco irure velit consectetur pariatur. Nulla esse voluptate sunt tempor voluptate aute pariatur Lorem proident aliquip aliquip duis id tempor. Consequat deserunt ex amet Lorem deserunt esse. Et occaecat Lorem in consectetur cupidatat magna reprehenderit adipisicing nulla laborum sint proident ut. Reprehenderit commodo exercitation deserunt ea fugiat labore nisi. Labore aliqua ullamco eiusmod quis excepteur aliquip fugiat anim adipisicing enim labore minim nisi.\r\n. ",
      attachments: ["Article.docx", "File.zip", "Mail.txt", "Article.docx", "File.zip", "Mail.txt"],
      footer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet est magnam ab, possimus fugit ullam numquam aut nesciunt ea doloremque ratione aliquam vitae doloribus architecto vel natus quaerat corporis."
    },
    {
        id: 1002,
        readStatus: "unread",
        name: "Stancey Patterson",
      sender: "stacey.patterson@example.com",
      profile: "https://randomuser.me/api/portraits/women/80.jpg",
      time: "03.48 PM",
      header: "Two factor authentication",
      body: "Dear Peter,\n\nOccaecat pariatur ullamco sint irure dolor ad laboris Lorem cillum aute adipisicing aliquip pariatur. Consectetur ea aute incididunt adipisicing tempor mollit culpa quis. Nulla ex qui in sint aliqua pariatur irure elit enim. Magna pariatur ut ullamco nostrud sunt tempor laborum quis officia adipisicing elit magna deserunt. Aliqua adipisicing laboris ut esse aliqua anim ullamco tempor adipisicing. Sit enim fugiat consequat in eu culpa. Cillum amet consequat ad laboris.\r\n.",
      attachments: [],
      footer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet est magnam ab, possimus fugit ullam numquam aut nesciunt ea doloremque ratione aliquam vitae doloribus architecto vel natus quaerat corporis."
    },
    {
        id: 1003,
        readStatus: "read",
        name: "Brad Gibson",
      sender: "brad.gibson@example.com",
      profile: "https://randomuser.me/api/portraits/women/85.jpg",
      time: "04.25 PM",
      header: "Udemy trending courses",
      body: "Dear Brad,\n\nQui tempor consectetur fugiat enim aliqua exercitation ut eu cupidatat consequat est. Quis ex eu Lorem ipsum pariatur magna esse mollit fugiat excepteur veniam. Occaecat sint enim non nostrud do cillum irure voluptate non. Nulla officia officia magna exercitation labore nisi minim ipsum tempor incididunt commodo mollit esse reprehenderit. Tempor amet proident sunt mollit dolor eiusmod cupidatat velit irure commodo aliquip elit consectetur. Amet consectetur commodo laboris occaecat officia in veniam dolore fugiat reprehenderit officia dolore.\r\n.",
      attachments: ["Article.docx", "File.zip", "Mail.txt"],
      footer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet est magnam ab, possimus fugit ullam numquam aut nesciunt ea doloremque ratione aliquam vitae doloribus architecto vel natus quaerat corporis."
    },
    {
        id: 1004,
        readStatus: "read",
        name: "Christine Stanley",
      sender: "christine.stanley@example.com",
      profile: "https://randomuser.me/api/portraits/women/84.jpg",
      time: "07.15 AM",
      header: "Iphone weekly updates",
      body: "Dear Cristi,\n\nIncididunt sint ullamco aliqua et sint cupidatat anim proident consequat anim. In eu tempor ullamco aute aute ad laborum fugiat. Qui amet id deserunt dolor sint id. Cupidatat commodo aliquip duis incididunt voluptate nostrud ipsum excepteur. Et velit commodo qui ipsum excepteur dolore pariatur nisi aliquip officia dolore pariatur nostrud nostrud. Nostrud sunt pariatur aliqua consectetur irure commodo ex tempor ut sint ut culpa sit. Consequat laborum voluptate enim minim adipisicing proident laborum eiusmod qui non fugiat ex irure.\r\n.",
      attachments: ["Article.docx", "File.zip", "Mail.txt"],
      footer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet est magnam ab, possimus fugit ullam numquam aut nesciunt ea doloremque ratione aliquam vitae doloribus architecto vel natus quaerat corporis."
    },
    {
        id: 1005,
        readStatus: "unread",
        name: "Sean Morgan",
      sender: "sean.morgan@example.com",
      profile: "https://randomuser.me/api/portraits/women/83.jpg",
      time: "11.45 AM",
      header: "University of Sri jayewardenepura",
      body: "Dear Sean,\n\nEt ut laboris cupidatat consectetur cupidatat id. Eiusmod excepteur minim fugiat Lorem veniam incididunt commodo ea quis voluptate laborum velit magna sit. Laborum esse ad est laborum non reprehenderit qui velit nostrud. Tempor officia commodo ipsum in ex mollit. Et qui nulla nisi culpa minim quis qui laboris occaecat veniam. Consectetur dolor excepteur dolor nisi consequat eu labore exercitation consectetur incididunt nisi aliqua dolor deserunt.\r\n.",
      attachments: ["Article.docx", "File.zip", "Mail.txt"],
      footer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet est magnam ab, possimus fugit ullam numquam aut nesciunt ea doloremque ratione aliquam vitae doloribus architecto vel natus quaerat corporis."
    },
    {
        id: 1006,
        readStatus: "read",
        name: "Johny Rodriguez",
      sender: "johnny.rodriguez@example.com",
      profile: "https://randomuser.me/api/portraits/women/82.jpg",
      time: "04.00 PM",
      header: "Medium daily reads",
      body: "Dear John,\n\nAliquip do ullamco duis dolore dolor ex culpa. Tempor dolore esse ad eu adipisicing in ad ullamco nisi minim. Nisi voluptate ut reprehenderit excepteur ea Lorem. Laborum Lorem pariatur dolore do deserunt velit Lorem aliqua nisi. Elit Lorem occaecat reprehenderit Lorem veniam adipisicing duis adipisicing cupidatat dolor aute. Minim laborum nostrud aute nulla ut est qui quis. Sunt fugiat esse ea anim laborum reprehenderit pariatur eiusmod.\r\n.",
      attachments: ["Article.docx", "File.zip", "Mail.txt"],
      footer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet est magnam ab, possimus fugit ullam numquam aut nesciunt ea doloremque ratione aliquam vitae doloribus architecto vel natus quaerat corporis."
    }
  ]