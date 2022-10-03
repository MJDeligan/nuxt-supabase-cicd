-- when a table is created RLS will automatically be enabled 
create or replace function activate_rls()
returns event_trigger
language plpgsql as
$$
declare obj record;
begin
  for obj in select * from pg_event_trigger_ddl_commands() WHERE command_tag in ('CREATE TABLE','CREATE TABLE AS')
  loop
    if (obj.schema_name = 'public' and obj.object_type = 'table') then
      raise notice '[auto_enable_rls] Automatically enabling RLS for new table';
      execute format('alter table %s enable row level security', obj.object_identity);
    end if;
  end loop;
end;
$

create event trigger activate_rls_on_new_table on ddl_command_end
when tag in ('CREATE TABLE','CREATE TABLE AS')
execute procedure activate_rls();
