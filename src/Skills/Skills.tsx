import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <div className="w-full" id="skills">
      <h2 className="mb-8 sm:mb-10 text-4xl text-center font-extrabold">Compétences techniques</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tasks</th>
              <th>True / False</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>User stories</td>
              <td>Rédiger le détail des fonctionnalités d'une appication web ou mobile</td>
              <td>
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Wireframes</td>
              <td>Création des schémas de conception pour mettre évidence la structure de base d'une page</td>
              <td>
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Responsive Design</td>
              <td>Développeur une interface utilisateur statique et adaptable à toutes les tailles d’écrans</td>
              <td>
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>Interactions</td>
              <td>Développer une interface utilisateur dynamique avec des intéractions</td>
              <td>
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>MCD - MLD - MPD</td>
              <td>Créer une base de données</td>
              <td>
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>ORM - dataMapper</td>
              <td>Développer les composants d’accès aux données</td>
              <td>
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
