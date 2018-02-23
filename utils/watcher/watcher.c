
#include <stdio.h>
#include <stdlib.h>


int main(int argc, char *argv[])
{
	printf("\n\n\t\t\t[FILE WATCHER TEST EXECUTABLE...]\n\n");
	
	if (argc == 1) {
		printf("<No args>\n");
		
		return EXIT_FAILURE;
	}
	
	for (int i = 1; i < argc; i++) {
		if (argv[i] == NULL) {
			fprintf(stderr, "[REACHED NULL...]\n");
			
			break;
		}
		
		printf("File: %s\n\n", argv[i]);
	}
	
	return EXIT_SUCCESS;
}