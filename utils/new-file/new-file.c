
#include <stdio.h>
#include <stdlib.h>

const char* FILE_METADATA = "\n\
/** ****************************************************************************\n \
 *                                                                              \n \
 *                             [FILE NAME]                                      \n \
 *                                                                              \n \
 *  Author: Jose Fernando Lopez Fernandez                                       \n \
 *                                                                              \n \
 *  Date:   <Date>                                                              \n \
 *                                                                              \n \
 *  ****************************************************************************\n \
                                                                                \n \
";


int main(int argc, char *argv[])
{
	if (argc == 1)
		return EXIT_SUCCESS;
	
	for (int i = 1; i < argc; i++) {
		FILE* newFile = fopen(argv[i], "w");
		
		fprintf(newFile, "%s", FILE_METADATA);
		
		fclose(newFile);
	}
}