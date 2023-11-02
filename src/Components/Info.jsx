import React from "react";

export default function Info({ names }) {
  return (
    <div className="leading-10 phone:px-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugit quis
      quas dolore ut obcaecati est praesentium ipsa assumenda expedita sapiente
      culpa id fuga amet blanditiis, non excepturi voluptates magnam, voluptatem
      dolorum enim labore similique iure? Ut quis nobis odit soluta ab.
      Praesentium odio odit deserunt quam illum autem nemo earum officiis ex
      nesciunt, minus itaque vel voluptas molestias harum veniam cumque sapiente
      quod quae ad libero? Temporibus labore est natus dignissimos minus
      corporis inventore, id quos vero quia omnis sint at doloribus. Laboriosam
      ullam incidunt non natus vel accusantium aut dolore! Laudantium
      voluptatibus expedita repellat beatae inventore. Officia, tempora.
      <div className="text-4xl text-orange-600 font-bold text-center">List</div>
      <div className="text-2xl text-orange-500 font-semibold text-center">It's Me</div>
      <div className="text-xl text-orange-400 border-2 border-black-50">
        <ol className="list-decimal list-inside border-2 phone:ml-1 ml-96">
          {names && names.length > 0 && names.map((name) => <li>{name}</li>)}
        </ol>
      </div>
    </div>
  );
}
