import java.io.File;

class GetPath {
	public static void main(String []args) {
	final File f = new File(GetPath.class.getProtectionDomain().getCodeSource().getLocation().getPath());
	System.out.print(GetPath.class);
	}
}

/* GetPath.class.getProtectionDomain()

ProtectionDomain  (file:/D:/dev/training/currentTraining/codes/ <no signer certificates>)
 sun.misc.Launcher$AppClassLoader@73d16e93
 <no principals>
 java.security.Permissions@6d06d69c (
 ("java.lang.RuntimePermission" "exitVM")
 ("java.io.FilePermission" "\D:\dev\training\currentTraining\codes\-" "read")
)  */

/* GetPath.class.getProtectionDomain().getCodeSource()

(file:/D:/dev/training/currentTraining/codes/ <no signer certificates>)
 */
 
/* GetPath.class.getProtectionDomain().getCodeSource().getLocation()

file:/D:/dev/training/currentTraining/codes/
 */
 
/* GetPath.class.getProtectionDomain().getCodeSource().getLocation().getPath()

D:/dev/training/currentTraining/codes/
 */