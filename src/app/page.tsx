import { getUsers } from "@/lib/users";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Lista de Usuários</h1>

        {users.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum usuário encontrado</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  {user.image && (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${user.emailVerified
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                      >
                        {user.emailVerified ? "Verificado" : "Não verificado"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <p>Criado em: {new Date(user.createdAt).toLocaleDateString('pt-BR')}</p>
                  <p>Atualizado em: {new Date(user.updatedAt).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Total de usuários: {users.length}
          </p>
        </div>
      </main>
    </div>
  );
}
