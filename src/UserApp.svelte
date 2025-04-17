<script>
  import UserRow from "./lib/UserRow.svelte";
  import "./app.css";

  const user = {
    id: 1,
    name: "Cry.",
    address: "Json Valley, 123 M7",
  };
</script>

<table class="table-auto w-[60rem] border-collapse border border-slate-400">
  <thead>
    <tr>
      <td class="py-3">Id</td>
      <td>Nama</td>
      <td>Alamat</td>
    </tr>
  </thead>
  <tbody>
    <UserRow {...user} />
    <UserRow {...user} />
    <UserRow {...user} />
    <UserRow {...user} />
  </tbody>
</table>
